import { Readable } from "stream";

export interface VolcanoConfig {
  appId?: string;
  accessToken?: string;
  userId?: string;
}

export interface EdgeConfig {
  trustedToken?: string;
}

export interface OpenAIConfig {
  apiKey: string;
  model?: string;
  baseUrl?: string;
}

export interface TTSConfig {
  volcano?: VolcanoConfig;
  edge?: EdgeConfig;
  openai?: OpenAIConfig;
}

export type TTSBuilder = (
  options: TTSConfig & {
    stream: Readable;
    text: string;
    speaker: string;
  }
) => Promise<Uint8Array | undefined>;

export interface TTSSpeaker {
  /**
   * 音色名称
   */
  name?: string;
  /**
   * 音色性别分类，男女（可选）
   */
  gender?: string;
  /**
   * 音色标识
   */
  speaker: string;
}

export interface TTSProvider {
  name: string;
  speakers: TTSSpeaker[];
  tts: TTSBuilder;
}

export interface CurrentTTSSpeaker {
  speaker: string;
  tts: TTSBuilder;
}
