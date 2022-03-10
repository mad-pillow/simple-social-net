export default function Main(props) {
  return (
    <div className='container flex-grow-1'>
      <main className='d-flex flex-column justify-content-start align-items-center'>{props.children}</main>
    </div>
  );
}
