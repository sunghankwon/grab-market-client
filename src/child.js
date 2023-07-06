function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      이름은 {name}이며 {age} 살입니다.
    </div>
  );
}
export default ChildComponent;
