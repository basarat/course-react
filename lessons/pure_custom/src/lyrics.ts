import { v4 } from "uuid";

const createId = () => v4();

export const lyrics = [
  { id: createId(), value: 'Never gonna give you up' },
  { id: createId(), value: 'Never gonna let you down' },
  { id: createId(), value: 'Never gonna run around and desert you' },
  { id: createId(), value: 'Never gonna make you cry' },
  { id: createId(), value: 'Never gonna say goodbye' },
  { id: createId(), value: 'Never gonna tell a lie and hurt you' }
];

/** Break shallow compare */
export const getLyrics = () => lyrics.map(x => ({ ...x }));
