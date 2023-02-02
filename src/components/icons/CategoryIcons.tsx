import COLOR from '@src/common/constants/Colors';

export const CareerIcon = ({ isActive }: { isActive: boolean }) => (
  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.7541 10.4001H4.13001V8.94902H2.7541V10.4001ZM2.7541 7.37623H4.13001V5.92517H2.7541V7.37623ZM2.7541 4.35319H4.13001V2.90212H2.7541V4.35319ZM5.81243 10.4001H7.18833V8.94902H5.81243V10.4001ZM5.81243 7.37623H7.18833V5.92517H5.81243V7.37623ZM5.81243 4.35319H7.18833V2.90212H5.81243V4.35319ZM8.87152 10.4001H10.2474V8.94902H8.87152V10.4001ZM8.87152 7.37623H10.2474V5.92517H8.87152V7.37623ZM8.87152 4.35319H10.2474V2.90212H8.87152V4.35319ZM12.2356 4.03109e-07H0.765156C0.66471 -0.000105529 0.565229 0.0206679 0.472401 0.0611331C0.379572 0.101598 0.295216 0.160962 0.224155 0.23583C0.153094 0.310698 0.0967209 0.399603 0.0582588 0.497461C0.0197968 0.59532 -5.02227e-08 0.700214 0 0.806146V16.0326C0 16.2892 0.0966406 16.5352 0.268662 16.7167C0.440683 16.8981 0.673994 17 0.917269 17H4.9716V13.9745C4.9716 13.7607 5.05213 13.5557 5.19549 13.4045C5.33884 13.2533 5.53326 13.1684 5.73599 13.1684H7.26477C7.4675 13.1684 7.66193 13.2533 7.80528 13.4045C7.94863 13.5557 8.02916 13.7607 8.02916 13.9745V17H12.0827C12.326 17 12.5593 16.8981 12.7313 16.7167C12.9034 16.5352 13 16.2892 13 16.0326V0.806146C13 0.592343 12.9195 0.387297 12.7761 0.236115C12.6328 0.0849333 12.4383 4.03109e-07 12.2356 4.03109e-07Z"
      fill={isActive ? COLOR.GRAY600 : COLOR.GRAY200}
    />
  </svg>
);

export const SelfIcon = ({ isActive }: { isActive: boolean }) => {
  const FILL = isActive ? COLOR.GRAY600 : COLOR.GRAY200;

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.48913 7.48892V0C5.51849 0.124037 3.74192 0.953626 2.41113 2.24653C3.77402 3.60729 4.66267 5.44449 4.79108 7.48892H7.48913Z"
        fill={FILL}
      />
      <path
        d="M3.76983 7.48967C3.64434 5.74512 2.8841 4.17715 1.7255 3.00391C0.731786 4.25011 0.107251 5.79839 0 7.48967H3.76983Z"
        fill={FILL}
      />
      <path
        d="M8.51074 7.48892H11.2088C11.3365 5.44522 12.2258 3.60802 13.5887 2.24653C12.258 0.953626 10.4814 0.124037 8.51074 0V7.48892Z"
        fill={FILL}
      />
      <path
        d="M15.9996 7.48967C15.8923 5.79839 15.2678 4.25011 14.2741 3.00391C13.1155 4.17642 12.3552 5.74439 12.2305 7.48894H15.9996V7.48967Z"
        fill={FILL}
      />
      <path
        d="M11.2088 8.50977H8.51074V15.9994C10.4814 15.8754 12.258 15.0458 13.5887 13.7522C12.2258 12.3907 11.3372 10.5535 11.2088 8.50977Z"
        fill={FILL}
      />
      <path
        d="M0 8.50977C0.106521 10.2003 0.731786 11.7486 1.7255 12.9948C2.8841 11.8223 3.64434 10.2543 3.7691 8.50977H0Z"
        fill={FILL}
      />
      <path
        d="M12.2305 8.50977C12.3552 10.2543 13.1155 11.8223 14.2741 12.9948C15.2678 11.7486 15.893 10.2003 15.9996 8.50977H12.2305Z"
        fill={FILL}
      />
      <path
        d="M7.48913 8.50977H4.79108C4.6634 10.5535 3.77402 12.3907 2.41113 13.7522C3.74192 15.0451 5.51849 15.8746 7.48913 15.9994V8.50977Z"
        fill={FILL}
      />
    </svg>
  );
};

export const InvestmentIcon = ({ isActive }: { isActive: boolean }) => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.4236 5.46093L7.97521 0.171311C7.8403 0.0603975 7.6729 0 7.50038 0C7.32787 0 7.16046 0.0603975 7.02555 0.171311L0.576365 5.46093C0.396624 5.60841 0.251451 5.79582 0.151659 6.0092C0.0518675 6.22259 2.75152e-05 6.45644 0 6.69336V14.11C0 14.6113 0.19303 15.092 0.536626 15.4464C0.880221 15.8009 1.34624 16 1.83215 16H5.97359V12.2578C5.97359 12.049 6.05402 11.8487 6.19718 11.701C6.34035 11.5533 6.53452 11.4703 6.73698 11.4703H8.26378C8.46624 11.4703 8.66042 11.5533 8.80358 11.701C8.94675 11.8487 9.02718 12.049 9.02718 12.2578V16H13.1678C13.6538 16 14.1198 15.8009 14.4634 15.4464C14.807 15.092 15 14.6113 15 14.11V6.69415C15 6.45723 14.9481 6.22337 14.8483 6.00999C14.7485 5.79661 14.6034 5.6092 14.4236 5.46172"
      fill={isActive ? COLOR.GRAY600 : COLOR.GRAY200}
    />
  </svg>
);
