export default function Main(props) {
  return (
    <main className='main-container container d-flex flex-column justify-content-flex-start align-items-center'>
      {props.children}
    </main>
  );
}
