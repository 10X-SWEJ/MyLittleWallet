export default function Income({ stroke }: { stroke: string }) {
   return (
      <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            opacity="0.4"
            d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            opacity="0.4"
            d="M18.5 9.5V14.5"
            stroke={stroke}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M9 18C9 18.75 8.79001 19.46 8.42001 20.06C7.73001 21.22 6.46 22 5 22C3.54 22 2.26999 21.22 1.57999 20.06C1.20999 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path d="M6.48975 17.98H3.50977" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M5 16.52V19.51" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
         <path
            d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"
            stroke={stroke}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
}
