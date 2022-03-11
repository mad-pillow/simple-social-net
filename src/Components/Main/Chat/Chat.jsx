import "./chat.scss";

export default function Chat() {
  return (
    <>
      <h2>Chat</h2>
      <div className='chat-container container d-flex flex-grow-1 flex-column'>
        <div className='messages-container flex-grow-1 d-flex flex-column'>
          <div className='msg-block card d-inline-flex flex-column align-items-start align-self-end py-2 px-4 mb-1'>
            <strong className='msg-owner mb-1'>@dmitriy.s</strong>
            <p className='msg-text mb-1 small'>Hi, there!</p>
            <small className='msg-time align-self-end text-muted'>15:02:45</small>
          </div>
          <div className='msg-block card d-inline-flex flex-column align-items-start align-self-end py-2 px-4 mb-1'>
            <strong className='msg-owner mb-1'>@dmitriy.s</strong>
            <p className='msg-text mb-1 small'>
              Sunt sunt voluptas itaque! Nobis possimus. Libero asperiores? Id augue laboris. Dolorum, viverra velit,
              torquent minim sapien quia debitis dolores netus mollit. Iaculis dui? Autem magni ultrices, doloribus
              primis diamlorem corrupti class consequat semper! Diamlorem autem donec laudantium. Taciti quam, sequi
              venenatis ducimus nunc cumque nisl! Corrupti interdum, laudantium lacinia.
            </p>
            <small className='msg-time align-self-end text-muted'>15:04:02</small>
          </div>
          <div className='msg-block card d-inline-flex flex-column align-items-start mw-80 align-self-start py-2 px-4'>
            <strong className='msg-owner mb-1'>@pavel.k</strong>
            <p className='msg-text mb-1 small'>Wow! That's awesome, man!</p>
            <small className='msg-time align-self-end text-muted'>15:05:10</small>
          </div>
        </div>
        <div className='input-group' bis_skin_checked='1'>
          <input type='text' className='form-control' placeholder='Enter your message' />
          <button type='submit' className='btn btn-secondary'>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
