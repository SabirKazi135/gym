import WorkoutVideoPlayer from '@/components/main/WorkoutVideoPlayer';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import BackArrow from 'assets/svgs/class/BackArrow.svg';
import Participants from '@/components/main/class/Participants';
import BlurSelector from '@/components/main/class/BlurSelector';
import { router } from 'expo-router';
import { useCameraAndBlur } from './_layout';
import CamaraOnIcon from 'assets/svgs/class/CamaraOnIcon.svg';
import CamaraOffIcon from 'assets/svgs/class/CamaraOffIcon.svg';
import { useClassSessions } from '@/hooks/queries/useClass';
import { useVideoPlayerStore } from '@/store/videoPlayerStore';
import { getAgoraEngine } from '@/services/agora/agoraEngine';
import { useEffect, useMemo, useState } from 'react';
import { useLiveStreamStore } from '@/store/liveStreamStore';
import { useGroupStore } from '@/store/groupStore';
import { RtcSurfaceView, RtcTextureView } from 'react-native-agora';
import { requestPermissions } from '@/utils/requestPermission';
import { useAuthStore } from '@/store/useAuthStore';
import { BlurView } from 'expo-blur';

export default function ClassScreen2() {

  const { localCamaraMode, setLocalCamaraMode, localBlur, setLocalBlur } = useCameraAndBlur();

  const { data } = useClassSessions();
  const { user } = useAuthStore();
  const isFullScreen = useVideoPlayerStore(state => state.isFullScreen)

  const playlist = useVideoPlayerStore(s => s.playlist);
  const loadVideos = useVideoPlayerStore(s => s.loadVideos);

  const participants = useLiveStreamStore(s => s.participants);

  const { group } = useGroupStore();
  const channelName = group?.id ?? "test-channel";

  const engine = useMemo(() => getAgoraEngine(), []);

  /*
  ENGINE INITIALIZATION
  */
  useEffect(() => {
    engine.initialize({
      appId: process.env.EXPO_PUBLIC_AGORA_APP_ID ?? "",
    });
  }, [engine]);

  /*
  PERMISSIONS + LOCAL PREVIEW
  */
  useEffect(() => {
    const setup = async () => {
      const ok = await requestPermissions();
      if (!ok) return;

      engine.enableVideo();

      engine.startPreview();
    };

    setup();
  }, [engine]);

  /*
  AGORA EVENT LISTENERS
  */
  useEffect(() => {

    const onJoin = (_connection: any, uid: number) => {
      useLiveStreamStore.getState().addParticipant(uid);
    };

    const onLeave = (_connection: any, uid: number) => {
      useLiveStreamStore.getState().removeParticipant(uid);
    };

    engine.addListener("onUserJoined", onJoin);
    engine.addListener("onUserOffline", onLeave);

    return () => {
      engine.removeListener("onUserJoined", onJoin);
      engine.removeListener("onUserOffline", onLeave);
    };

  }, [engine]);

  /*
  JOIN CHANNEL
  */
  useEffect(() => {
    const join = async () => {
      engine.joinChannel(
        "",
        channelName,
        0,
        {}
      );
    };

    join();

  }, [engine, channelName]);

  /*
  CAMERA TOGGLE
  */
  useEffect(() => {

    if (localCamaraMode) {
      engine.enableVideo();
      engine.startPreview();
    } else {
      engine.stopPreview();
      engine.disableVideo();
    }

  }, [localCamaraMode, engine]);

  /*
  CLEANUP
  */
  useEffect(() => {
    return () => {
      engine.stopPreview();
      engine.leaveChannel();
    };
  }, [engine]);

  /*
  VIDEO PLAYLIST
  */
  const videoUrls = useMemo(() => {
    if (!data) return [];

    return data.sessionWorkouts.map(item => ({
      url: item.videoUrl
    }));
  }, [data]);

  useEffect(() => {
    if (videoUrls.length === 0) return;
    if (playlist.length > 0) return;

    loadVideos(videoUrls);

  }, [videoUrls, playlist.length, loadVideos]);

  return (
    <View className={`${isFullScreen ? "bg-slate-950" : "bg-background"} w-full h-full px-4 relative`}>

      {!isFullScreen && (
        <Pressable onPress={() => router.back()} className="mt-6">
          <BackArrow />
        </Pressable>
      )}

      <View className={`${isFullScreen ? "" : "mt-6"} w-full ${isFullScreen ? "h-100%" : "h-[25%]"}`}>
        {data && <WorkoutVideoPlayer sessionId={data.id} />}
      </View>


      {!isFullScreen && (

        <View className="border border-[#E5E5E5] items-center w-full mt-4 mb-4 rounded-md py-6">

          <View className="flex-row w-[90%] justify-between">

            <View className="flex-row w-[45%] items-center gap-2">
              <Pressable
                onPress={() => setLocalCamaraMode(!localCamaraMode)}
                className="bg-[#EBEBEB] p-3 rounded-md"
              >
                {localCamaraMode ? <CamaraOnIcon /> : <CamaraOffIcon />}
              </Pressable>

              <Text className="font-semibold text-sm text-black">{`Camara ${localCamaraMode ? "On" : "Off"}`}</Text>
            </View>

            <View className="flex-row w-[55%] justify-end items-center gap-2">

              <Text className="font-semibold text-sm text-black">
                Blur:
              </Text>

              <BlurSelector
                selected={localBlur}
                onChange={setLocalBlur}
              />

            </View>

          </View>

          <View className="flex-row bg-white flex-wrap justify-between mt-8 px-4">

            <View className="w-[31%] relative h-32 overflow-hidden items-center">
              <Participants name={user?.name || ""} showCameraFeed={localCamaraMode}>
                  <RtcTextureView
                    canvas={{ uid: 0 }}
                    style={StyleSheet.absoluteFill}
                  />
                <BlurView className='' intensity={80} tint='light' style={StyleSheet.absoluteFill}>
                </BlurView>
              </Participants>
            </View>

            {participants.map((p) => (
              <View key={p.uid} className="w-[31%] h-32 overflow-hidden items-center">
                <RtcSurfaceView
                  canvas={{ uid: p.uid }}
                  style={{ flex: 1 }}
                />
              </View>
            ))}
            {/* <BlurView className='border' intensity={50} tint='extraLight' style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
                </BlurView> */}
          </View>

        </View>
      )}

    </View>
  );
}