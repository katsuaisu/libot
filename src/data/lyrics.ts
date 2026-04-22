export interface LyricLine {
  text: string;
  start: number; // seconds
  end: number;
  section?: string;
}

// Timestamps from LIBOT_LYRICS.pdf
export const LYRICS: LyricLine[] = [
  { text: "Buksan mo ang iyong mga mata", start: 35, end: 41, section: "VERSE 1" },
  { text: "at Pag-isipan mo kung sino ang mga naniniwala", start: 41, end: 51 },
  { text: "Sa'yo at kung ang dilim ay bumisita", start: 51, end: 58 },
  { text: "Sinasabi ko sa'yo, laging may ilaw na magpapakita", start: 58, end: 69 },

  { text: "Tulungan natin ang isa't isa", start: 70, end: 77, section: "VERSE 2" },
  { text: "Para sa magandang umaga", start: 77, end: 86 },
  { text: "Ang kaalaman ay para sa lahat,", start: 87, end: 94 },
  { text: "Iyong mata iyong imulat", start: 94, end: 99 },

  { text: "Ang kahusayan ng isa ay palaging iba-iba", start: 103, end: 111, section: "CHORUS" },
  { text: "Sa bawat tao~oo~ sabi ko nga at", start: 111, end: 119 },
  { text: "Katulad ng mundo'ng daloy ay paikot-ikot", start: 120, end: 127 },
  { text: "Ang husay at talino'y dapat ipalibot-libot", start: 128, end: 135 },
  { text: "Ipalibot-libot, oh, paikot-ikot", start: 137, end: 146 },
  { text: "Oh, palibot-libot", start: 146, end: 150 },

  { text: "At kung ang kadiliman ay bumisita", start: 160, end: 168, section: "VERSE 3" },
  { text: "Tandaan mo na kahit mahirap ang ginagawa", start: 169, end: 176 },
  { text: "Ang tunay na husay ay mapapakita sa pagtulong sa iba", start: 177, end: 185 },
  { text: "Kaya ang husay at talino'y pinapalibot pa", start: 185, end: 195 },

  { text: "Ang kahusayan ng isa ay palaging iba-iba", start: 198, end: 205, section: "CHORUS" },
  { text: "Sa bawat tao~oo~ sabi ko nga at", start: 206, end: 213 },
  { text: "Katulad ng mundo'ng daloy ay paikot-ikot", start: 214, end: 222 },
  { text: "Ang husay at talino'y dapat ipalibot-libot", start: 223, end: 232 },

  { text: "Ipalibot-libot, oh, paikot-ikot", start: 232, end: 240, section: "REFRAIN" },
  { text: "Oh, palibot-libot,", start: 240, end: 245 },
  { text: "Ipaikot-ikot", start: 250, end: 252 },
];
