const Header = (props: any) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.isMarried}</p>
      <p>
        {props.hobbies.map((hoby: any) => (
          <li>{hoby}</li>
        ))}
      </p>
    </div>
  );
};

export default Header;
