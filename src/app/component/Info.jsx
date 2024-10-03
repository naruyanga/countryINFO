const Info = ({countryInfo})=>{
    const {name} = countryInfo
    const {flags}=countryInfo
    const {coatOfArms} =countryInfo
    const {maps}=countryInfo
return <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
    <div style={{fontSize:"35px",fontWeight:"bold"}}>{name.common}</div>
    <img style={{height:'200px',width:"400px"}} src={flags.png}/>
    <div className="info">Official name: {name.official}</div>
    <div className="info">Capital: {countryInfo.capital}</div>
    <div className="info">Region: {countryInfo.region}</div>
    <div className="info">Population: {countryInfo.population}</div>
    <div className="info">Area: {countryInfo.area}</div>
    <div className="info">Timezones: {countryInfo.timezones}</div>
    <div className="info">Fifa: {countryInfo.fifa}</div>
    <div className="info">Comtinents: {countryInfo.continents}</div>
    {/* <div>maps</div>
    <div>{maps.googleMaps}</div> */}
    <div style={{fontWeight:"bold",fontSize:"24px"}}>Coat of arms</div>
    <img style={{height:'200px',width:"200px"}} src={coatOfArms.png}/>
</div>

}
export default Info