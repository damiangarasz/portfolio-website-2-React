const imageCache: { [key: string]: HTMLImageElement } = {};

const imageUrls = {
  background:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Background/Background.png',
  pierwszyPlan:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/gotowce/pierwszy-plan.png',
  trzeciPlan:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/gotowce/trzeci-plan.png',
  drugiPlan:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/gotowce/drugi-plan.png',
  heroIdle:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Idle/Idle-Sheet.png',
  heroWalkR:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Run/Run-R.png',
  heroWalkL:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Run/Run-L.png',
  heroJump:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Jumlp-All/Jump-All-Sheet.png',
  heroDead:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Dead/Dead-Sheet.png',
  beeIdle:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Mob/Small%20Bee/Fly/Fly-Sheet.png',
  heroAttack:
    'https://raw.githubusercontent.com/damiangarasz/assets/main/Legacy-Fantasy%20-%20High%20Forest%202.3/Character/Attack-01/Attack-01-Sheet.png',
};

Object.entries(imageUrls).forEach(([key, url]) => {
  const img = new Image();
  img.src = url;
  imageCache[key] = img;
});

export function ImageCache() {
  return imageCache;
}
