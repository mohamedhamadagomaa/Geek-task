export default function NotiIcon (){
    const clickHandler =() =>{
        console.log("Alkassem");
      }
    return (
<div className="noti-icon"  onClick={()=>{clickHandler()}} >
<svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.38 16.6942L22.435 14.7491C21.9882 14.2681 21.7293 13.6425 21.7055 12.9864V9.15698C21.7055 4.23345 18.4232 0.0393333 12.5879 0.0393333C6.7526 0.0393333 3.47025 4.11188 3.47025 9.15698V13.4119C3.45899 13.7966 3.3077 14.1641 3.04476 14.4452L0.795736 16.6942C0.566683 16.9187 0.435598 17.2246 0.43103 17.5452V21.9217C0.43103 22.2441 0.559111 22.5533 0.787096 22.7813C1.01508 23.0093 1.3243 23.1374 1.64672 23.1374H8.39377C8.56291 24.1272 9.07671 25.0254 9.84427 25.6729C10.6118 26.3205 11.5837 26.6756 12.5879 26.6756C13.5921 26.6756 14.564 26.3205 15.3315 25.6729C16.0991 25.0254 16.6129 24.1272 16.782 23.1374H23.5291C23.8515 23.1374 24.1607 23.0093 24.3887 22.7813C24.6167 22.5533 24.7448 22.2441 24.7448 21.9217V17.5452C24.7402 17.2246 24.6091 16.9187 24.38 16.6942Z" fill="#53ACFF"/>
    </svg>
</div>
    );
    
}