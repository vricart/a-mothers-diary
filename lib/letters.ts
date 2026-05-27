export type Letter = {
  id: string;
  topic: string;
  when: string;
  date: string;
  place: string;
  seen: number;
  title: string;
  body: string[];
  warn?: string;
};

export const LETTERS: Letter[] = [
  {
    id: "l01",
    topic: "sleep",
    when: "3:14 a.m.",
    date: "Tonight",
    place: "somewhere in the dark hallway",
    seen: 1842,
    title: "No one tells you about the third wake-up",
    body: [
      "It is three a.m. and I am writing to you from the floor outside her room, because if I sit down on the rocking chair I will fall asleep and drop her, and if I lie down on her rug I will not get up again for work.",
      "The first wake-up I can do. The second wake-up I can do, on a good night, with the kind of patience that surprises me. But the third wake-up — the one after I have finally fallen back asleep, the one that arrives like a small fist through a window — undoes me. I cried tonight, quietly, into a muslin that still smells like the milk I made.",
      "I love her so much I could break. I just wanted to put that down somewhere where it counts.",
    ],
  },
  {
    id: "l02",
    topic: "identity",
    when: "6:48 a.m.",
    date: "Yesterday",
    place: "a kitchen, before anyone is up",
    seen: 2310,
    title: "I miss the woman who used to read in cafés",
    body: [
      "I found a book in a drawer today. A novel I was halfway through the week before he was born. There is a receipt tucked into page 142 from a café I used to walk to. I do not remember the name of the café. I do not remember the woman who chose that table by the window and ordered a flat white and read for two hours without checking anything.",
      "I am not asking for her back. I do not think she is coming back. I just want someone to know she existed.",
    ],
  },
  {
    id: "l06",
    topic: "guilt",
    when: "9:30 a.m.",
    date: "This morning",
    place: "the car, in the daycare parking lot",
    seen: 2740,
    title: "I was relieved when the door closed",
    body: [
      "I dropped her off and I walked back to the car and I sat in the driver's seat and I exhaled in a way I have not exhaled in eleven months. Then I cried because I exhaled.",
      "There is no version of this where I do not feel like I am failing somebody. I am tired of the math.",
    ],
  },
];
