import { addClasses, removeClasses, toggleClass } from './DOMHelpers';
import { IFrameHelper } from './IFrameHelper';
import { isExpandedView } from './settingsHelper';

// bubbleSVG
export const bubbleSVG =
  'M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z';

export const body = document.getElementsByTagName('body')[0];
export const widgetHolder = document.createElement('div');

export const bubbleHolder = document.createElement('div');
export const chatBubble = document.createElement('button');
export const closeBubble = document.createElement('button');
export const notificationBubble = document.createElement('span');

export const setBubbleText = bubbleText => {
  if (isExpandedView(window.$chatwoot.type)) {
    const textNode = document.getElementById('woot-widget--expanded__text');
    textNode.innerText = bubbleText;
  }
};

export const createBubbleIcon = ({ className, path, target }) => {
  let bubbleClassName = `${className} woot-elements--${window.$chatwoot.position}`;
  const bubbleIcon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  bubbleIcon.setAttributeNS(null, 'id', 'woot-widget-bubble-icon');
  bubbleIcon.setAttributeNS(null, 'width', '30');
  bubbleIcon.setAttributeNS(null, 'height', '35');
  bubbleIcon.setAttributeNS(null, 'viewBox', '122.4 107.2 225.6 239.2');
  bubbleIcon.setAttributeNS(null, 'fill', 'none');
  bubbleIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const bubblePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  bubblePath.setAttributeNS(null, 'd', "M 248.64 239.2 C 250.56 239.2 252.16 238.2496 253.12 236.3488 C 253.76 234.7648 253.76 232.864 252.48 231.28 C 250.24 228.7456 244.48 219.5576 245.44 213.8552 C 245.76 212.588 246.4 211.004 248.96 209.7368 C 264.32 201.1832 273.6 187.56 273.6 172.9872 C 273.6 147.9592 247.04 128 214.4 128 C 181.76 128 155.2 148.276 155.2 172.9872 C 155.2 197.6984 181.76 218.6072 214.4 218.6072 C 215.68 218.6072 216.64 218.6072 217.92 218.6072 C 222.08 224.6264 233.92 239.2 248.64 239.2 Z M 244.48 201.8168 C 240 204.3512 237.12 207.836 236.16 212.588 C 235.2 217.0232 236.48 221.7752 238.08 226.2112 C 231.68 221.7752 226.56 214.8056 224.64 211.3208 C 223.68 209.7368 222.08 208.7864 220.16 209.1032 C 218.24 209.1032 216.32 209.42 214.72 209.42 C 187.2 209.1032 164.8 192.9456 164.8 173.304 C 164.8 153.6616 187.2 137.8208 214.4 137.8208 C 241.6 137.8208 264 153.6616 264 173.304 C 264 184.7088 256.64 194.8464 244.48 201.8168 Z M 214 180 C 210.6864 180 208 177.1344 208 173.6 C 208 170.0656 210.6864 167.2 214 167.2 C 217.3136 167.2 220 170.0656 220 173.6 C 220 177.1344 217.3136 180 214 180 Z M 236.4 180 C 233.0864 180 230.4 177.1344 230.4 173.6 C 230.4 170.0656 233.0864 167.2 236.4 167.2 C 239.7136 167.2 242.4 170.0656 242.4 173.6 C 242.4 177.1344 239.7136 180 236.4 180 Z M 192 180 C 188.4656 180 185.6 177.1344 185.6 173.6 C 185.6 170.0656 188.4656 167.2 192 167.2 C 195.5344 167.2 198.4 170.0656 198.4 173.6 C 198.4 177.1344 195.5344 180 192 180 Z M 126.5768 151.8504 C 129.1256 151.532 131.6736 153.1264 131.9928 155.6776 L 147.604 250.72 H 282.0512 L 298.936 125.06 C 300.848 114.2168 308.8128 107.2 319.3264 107.2 H 343.2208 C 345.7696 107.2 348 109.4328 348 111.984 C 348 114.5352 345.7696 116.768 343.2208 116.768 H 319.3264 C 313.592 116.768 309.4504 120.5952 308.4944 126.6552 L 285.5552 299.836 C 295.1136 303.0248 301.804 311.9552 301.804 322.48 C 301.804 335.556 290.9712 346.4 277.9088 346.4 C 264.8464 346.4 254.0144 335.556 254.0144 322.48 C 254.0144 317.0584 255.9264 312.2744 258.7936 308.128 H 189.0208 C 191.8888 312.2744 193.8 317.0584 193.8 322.48 C 193.8 335.556 182.968 346.4 169.9056 346.4 C 156.8432 346.4 146.0104 335.556 146.0104 322.48 C 146.0104 309.404 156.5248 298.56 169.9056 298.56 H 275.6792 L 280.7768 260.288 H 143.1432 C 140.9136 260.288 138.6832 258.6936 138.3648 256.1416 L 122.4344 157.2728 C 122.116 154.7208 124.028 152.4888 126.5768 151.8504 Z M 263.2536 322.48 C 263.2536 330.4536 269.6256 336.832 277.5904 336.832 C 285.5552 336.832 291.9272 330.4536 291.9272 322.48 C 291.9272 314.5064 285.5552 308.128 277.5904 308.128 C 269.6256 308.128 263.2536 314.5064 263.2536 322.48 Z M 155.5688 322.48 C 155.5688 330.4536 161.9408 336.832 169.9056 336.832 C 177.8704 336.832 184.2424 330.4536 184.2424 322.48 C 184.2424 314.5064 177.8704 308.128 169.9056 308.128 C 161.9408 308.128 155.5688 314.5064 155.5688 322.48 Z");
  bubblePath.setAttributeNS(null, 'fill', '#194944');

  bubbleIcon.appendChild(bubblePath);
  target.appendChild(bubbleIcon);

  if (isExpandedView(window.$chatwoot.type)) {
    const textNode = document.createElement('div');
    textNode.id = 'woot-widget--expanded__text';
    textNode.innerText = '';
    target.appendChild(textNode);
    bubbleClassName += ' woot-widget--expanded';
  }

  target.className = bubbleClassName;
  target.style = "user-select: none;"
  target.title = 'Open chat window';
  return target;
};

export const createBubbleHolder = hideMessageBubble => {
  if (hideMessageBubble) {
    addClasses(bubbleHolder, 'woot-hidden');
  }
  addClasses(bubbleHolder, 'woot--bubble-holder');
  body.appendChild(bubbleHolder);
};

export const createNotificationBubble = () => {
  addClasses(notificationBubble, 'woot--notification');
  return notificationBubble;
};

export const onBubbleClick = (props = {}) => {
  const { toggleValue } = props;
  const { isOpen } = window.$chatwoot;
  if (isOpen !== toggleValue) {
    const newIsOpen = toggleValue === undefined ? !isOpen : toggleValue;
    window.$chatwoot.isOpen = newIsOpen;

    toggleClass(chatBubble, 'woot--hide');
    toggleClass(closeBubble, 'woot--hide');
    toggleClass(widgetHolder, 'woot--hide');
    IFrameHelper.events.onBubbleToggle(newIsOpen);

    if (!newIsOpen) {
      chatBubble.focus();
    }
  }
};

export const onClickChatBubble = () => {
  bubbleHolder.addEventListener('click', onBubbleClick);
};

export const addUnreadClass = () => {
  const holderEl = document.querySelector('.woot-widget-holder');
  addClasses(holderEl, 'has-unread-view');
};

export const removeUnreadClass = () => {
  const holderEl = document.querySelector('.woot-widget-holder');
  removeClasses(holderEl, 'has-unread-view');
};
