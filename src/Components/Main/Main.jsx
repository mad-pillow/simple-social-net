export default function Main(props) {
  return (
    <div className='container flex-grow-1 d-flex'>
      <main className='d-flex flex-grow-1 flex-column justify-content-start align-items-center'>{props.children}</main>
    </div>
  );
}
