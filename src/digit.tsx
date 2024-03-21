import React from 'react';

type Props = {
  /** The digit to render, as a string - renders numbers and commas; other characters ignored */
  d: string;
  /** The color to render the digit in */
  color?: string;
};

const Digit: React.FC<Props> = ({ d, color = 'var(--text-color)' }) => {
  switch (d) {
    case '0':
      return (
        <svg width="29" height="54" viewBox="0 0 29 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M4.39094 1L24.672 1C26.3708 1 27 1.64327 27 3.38012L27 42.6199C27 44.3567 26.3708 45 24.672 45H4.32802C2.62919 45 2 44.3567 2 42.6199L2 3.44444C2 1.77193 2.75503 1 4.39094 1ZM20.4564 7.16114L8.35486 7.16114C6.8448 7.22547 6.27852 7.54711 6.27852 9.47693L6.27852 38.3099C6.27852 40.1754 6.71896 40.6257 8.54362 40.6257H11.1792C13.0039 40.6257 13.4444 40.1754 13.4444 38.3099L13.4444 27.4529C13.4444 25.3944 14.6398 25.3944 16.087 25.3944C16.1908 25.3944 20.6612 25.3948 20.7592 25.3944C21.9678 25.3899 22.7215 25.2754 22.7215 23.0143L22.7215 9.47693C22.7215 7.61144 22.281 7.16114 20.4564 7.16114Z"
            fill={color}
          />
        </svg>
      );
    case '1':
      return (
        <svg width="24" height="54" viewBox="0 0 24 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M5.03475 1.224C3.43475 1.224 3.05075 1.544 3.05075 3.208V6.792C3.05075 8.392 3.37075 8.776 4.90675 8.776H6.50675C7.46675 8.776 7.72275 9.224 7.72275 10.056V22.92C7.72275 24.968 7.01875 25.608 5.73875 25.544C3.75475 25.48 3.05075 25.736 3.05075 27.912V42.44C3.05075 44.552 3.49875 45 5.61075 45H19.7548C21.8668 45 22.3148 44.552 22.3148 42.44V28.104C22.3148 25.992 21.8668 25.544 19.7548 25.544H15.9148C13.3548 25.544 12.9708 25.032 12.9708 22.792V3.848C12.9708 1.8 12.3948 1.224 10.3468 1.224H5.03475Z"
            fill={color}
          />
        </svg>
      );
    case '2':
      return (
        <svg width="24" height="54" viewBox="0 0 24 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M5.29075 1.224C3.24275 1.224 2.28275 1.992 2.28275 3.848C2.28275 5.704 3.24275 6.472 5.29075 6.472H13.8028C15.8508 6.472 16.4268 7.048 16.4268 9.096V17.864C16.4268 19.912 15.8508 20.488 13.8028 20.488H5.29075C3.11475 20.488 2.28275 21.32 2.28275 23.496V41.992C2.28275 44.168 3.11475 45 5.29075 45H18.6668C20.7148 45 21.6748 44.232 21.6748 42.376C21.6748 40.52 20.7148 39.752 18.6668 39.752H10.1548C8.10675 39.752 7.53075 39.176 7.53075 37.128V28.36C7.53075 26.312 8.10675 25.736 10.1548 25.736H18.6668C20.8428 25.736 21.6748 24.904 21.6748 22.728V4.232C21.6748 2.056 20.8428 1.224 18.6668 1.224H5.29075Z"
            fill={color}
          />
        </svg>
      );
    case '3':
      return (
        <svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M4.85875 1.224C2.81075 1.224 1.85075 1.992 1.85075 3.848C1.85075 5.704 2.81075 6.472 4.85875 6.472H13.7548C15.8028 6.472 16.3788 7.048 16.3788 9.096V17.864C16.3788 19.912 15.8028 20.488 13.7548 20.488H5.11475C3.06675 20.488 2.10675 21.256 2.10675 23.112C2.10675 24.968 3.06675 25.736 5.11475 25.736H13.7548C15.8028 25.736 16.3788 26.312 16.3788 28.36V37.128C16.3788 39.176 15.8028 39.752 13.7548 39.752H4.85875C2.81075 39.752 1.85075 40.52 1.85075 42.376C1.85075 44.232 2.81075 45 4.85875 45H22.7788C25.0188 45 25.7228 44.296 25.7228 41.992V25.992C25.7228 24.264 25.5308 23.624 23.5468 23.304C21.9468 23.048 21.6268 22.728 21.6268 20.552V4.168C21.6268 1.928 20.9228 1.224 18.6828 1.224H4.85875Z"
            fill={color}
          />
        </svg>
      );
    case '4':
      return (
        <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M4.93875 1.224C2.89075 1.224 2.31475 1.8 2.31475 3.848V32.392C2.31475 34.76 2.95475 35.336 5.25875 35.336H18.1868C20.2348 35.336 20.8108 35.912 20.8108 37.96V42.376C20.8108 44.488 21.4508 45 23.4348 45H27.5308C29.5148 45 30.1548 44.488 30.1548 42.376V27.464C30.1548 25.416 29.5788 24.84 27.5308 24.84H23.4988C20.9388 24.84 20.8108 25.736 20.8108 27.656C20.8108 29.128 20.8108 30.088 18.1228 30.088H14.2828C12.2348 30.088 11.6588 29.512 11.6588 27.464V3.784C11.6588 1.608 11.1468 1.224 9.09875 1.224H4.93875Z"
            fill={color}
          />
        </svg>
      );
    case '5':
      return (
        <svg width="28" height="54" viewBox="0 0 28 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M5.24275 1.224C3.06675 1.224 2.23475 2.056 2.23475 4.232V22.728C2.23475 24.904 3.06675 25.736 5.24275 25.736H13.8828C15.9308 25.736 16.5068 26.312 16.5068 28.36V37.128C16.5068 39.176 15.9308 39.752 13.8828 39.752H4.28275C2.29875 39.752 1.40275 40.136 1.40275 41.544V43.208C1.40275 44.616 2.29875 45 4.28275 45H22.8428C25.0188 45 25.8508 44.168 25.8508 41.992V23.496C25.8508 21.32 25.0188 20.488 22.8428 20.488H10.1068C8.05875 20.488 7.48275 19.912 7.48275 17.864V9.096C7.48275 7.048 8.05875 6.472 10.1068 6.472H22.5868C24.5708 6.472 25.4668 6.088 25.4668 4.68V3.016C25.4668 1.608 24.5708 1.224 22.5868 1.224H5.24275Z"
            fill={color}
          />
        </svg>
      );
    case '6':
      return (
        <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M4.74675 1.224C2.57075 1.224 1.80275 1.864 1.80275 4.168V42.056C1.80275 44.424 2.44275 45 4.74675 45H27.2748C29.6428 45 30.2188 44.36 30.2188 42.056V27.912C30.2188 25.544 29.5788 24.968 27.2748 24.968H9.61075C7.49875 24.968 7.05075 24.52 7.05075 22.408V9.032C7.05075 6.92 7.49875 6.472 9.61075 6.472H13.6428C14.7308 6.472 15.4348 6.856 15.6268 7.368C15.9468 8.2 15.8188 10.056 15.9468 11.208C16.1388 12.68 16.3948 13.384 18.5068 13.384C20.1068 13.384 21.1308 12.68 21.1308 10.44V4.168C21.1308 1.864 20.3628 1.224 18.1868 1.224H4.74675ZM22.4108 30.216C24.5228 30.216 24.9708 30.664 24.9708 32.776V37.192C24.9708 39.304 24.5228 39.752 22.4108 39.752H9.61075C7.49875 39.752 7.05075 39.304 7.05075 37.192V32.776C7.05075 30.536 7.56275 30.28 9.35475 30.216H22.4108Z"
            fill={color}
          />
        </svg>
      );
    case '7':
      return (
        <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M5.47475 1.224C3.17075 1.224 2.46675 1.928 2.46675 4.168V13.768C2.46675 15.56 3.29875 16.456 5.09075 16.456C6.88275 16.456 7.71475 15.56 7.71475 13.768V9.096C7.71475 7.048 8.29075 6.472 10.3388 6.472H19.1708C21.2188 6.472 21.7948 7.048 21.7948 9.096V14.856C21.7948 16.904 21.4108 17.352 19.8108 18.12L14.2428 20.68C12.4508 21.512 12.1308 21.768 12.1308 24.072V42.312C12.1308 44.168 12.8988 45 14.7548 45C16.6108 45 17.3788 44.168 17.3788 42.312V27.208C17.3788 25.416 17.7628 24.776 19.8108 23.88L24.2268 21.96C26.4668 21 27.0428 20.168 27.0428 17.608V4.168C27.0428 1.928 26.3388 1.224 24.0988 1.224H5.47475Z"
            fill={color}
          />
        </svg>
      );
    case '8':
      return (
        <svg width="36" height="54" viewBox="0 0 36 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M8.85875 1.224C6.55475 1.224 5.85075 1.928 5.85075 4.168V20.296C5.85075 22.472 5.27475 22.664 3.67475 22.92C2.33075 23.176 1.75475 23.24 1.75475 25.032V41.992C1.75475 44.296 2.52275 45 4.76275 45H31.3228C33.5628 45 34.2668 44.296 34.2668 41.992V25.032C34.2668 23.56 33.9468 23.176 32.6668 22.984C30.9388 22.728 30.1708 22.6 30.1708 20.296V4.168C30.1708 1.928 29.4668 1.224 27.2268 1.224H8.85875ZM22.2988 6.472C24.4108 6.472 24.9228 6.984 24.9228 9.096V17.672C24.9228 19.72 24.3468 20.296 22.2988 20.296H13.7228C11.6748 20.296 11.0988 19.72 11.0988 17.672V9.096C11.0988 6.856 11.8028 6.536 13.4668 6.472H22.2988ZM22.2988 25.544C24.3468 25.544 24.9228 26.12 24.9228 28.168V37.128C24.9228 39.176 24.3468 39.752 22.2988 39.752H13.7228C11.6748 39.752 11.0988 39.176 11.0988 37.128V28.168C11.0988 25.992 11.8028 25.608 13.3388 25.544H22.2988Z"
            fill={color}
          />
        </svg>
      );
    case '9':
      return (
        <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M4.74675 1.224C2.37875 1.224 1.80275 1.864 1.80275 4.168V22.536C1.80275 24.904 2.44275 25.48 4.74675 25.48H18.3148C20.4268 25.48 20.8748 25.928 20.8748 28.04V42.056C20.8748 44.36 21.6428 45 23.8188 45H27.2748C29.4508 45 30.2188 44.36 30.2188 42.056V4.168C30.2188 1.8 29.5788 1.224 27.2748 1.224H4.74675ZM22.4108 6.472C24.5228 6.472 24.9708 6.92 24.9708 9.032V17.672C24.9708 19.784 24.5228 20.232 22.4108 20.232H9.61075C7.49875 20.232 7.05075 19.784 7.05075 17.672V9.032C7.05075 6.792 7.56275 6.536 9.35475 6.472H22.4108Z"
            fill={color}
          />
        </svg>
      );
    case ',':
      return (
        <svg width="14" height="54" viewBox="0 0 14 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>{d}</title>
          <path
            d="M4.42975 32.648C2.70175 32.648 2.31775 33.032 2.31775 34.76V42.888C2.31775 45 2.89375 45 4.94175 45C5.64575 45 6.34975 44.936 6.34975 45.704C6.34975 46.728 5.70975 48.264 3.59775 49.864C2.89375 50.376 2.31775 50.824 2.31775 51.72C2.31775 52.552 2.82975 53.384 4.04575 53.384C8.65375 53.384 11.9178 49.736 11.9178 44.104V34.76C11.9178 33.032 11.5338 32.648 9.80575 32.648H4.42975Z"
            fill={color}
          />
        </svg>
      );
    default:
      return null;
  }
};

export default React.memo(Digit);