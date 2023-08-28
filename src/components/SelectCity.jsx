const SelectCity = ({ citys }) => {
  return (
    <ul>
      {
        citys.map((city, index) => <li key={index}>{city.city}</li>)
      }
    </ul>
  )
}
export default SelectCity
