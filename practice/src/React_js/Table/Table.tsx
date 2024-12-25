export interface data {
  name: string;
  city: string;
  description: string;
}

interface Datas {
  placesData: data[];
}
const Table = ({ placesData }: Datas) => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Description</th>
        </tr>
        <tbody>
          {placesData?.map((place, index) => {
            return (
              <tr key={index}>
                <td>{place.name}</td>
                <td>{place.city}</td>
                <td>{place.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
