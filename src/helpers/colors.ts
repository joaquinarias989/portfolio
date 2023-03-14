export const bgColors = {
  GRAY: 'bg-gray-300',
  PURPLE: 'bg-purple-300',
  GREEN: 'bg-green-300',
  CYAN: 'bg-cyan-300',
  YELLOW: 'bg-yellow-300',
  WHITE: 'bg-white',
  BLACK: 'bg-black text-white',
  ORANGE: 'bg-orange-300',
  INDIGO: 'bg-indigo-300',
};

export const getRandomBgColor = (): string => {
  const colors = Object.values(bgColors);
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
