export interface Hack {
  id: string;
  title: string;
  os: string;
  description: string | JSX.Element;
  video_url: string;
  advantages: string | JSX.Element;
}

export interface PhoneHacksState {
  hacks: Hack[]; // Define the hacks property here
}
