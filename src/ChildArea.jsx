import { memo } from 'react'

const Childarea = memo((props) => {
  const { open, onClickClose } = props;

  // const data = [...Array(2000).keys()];
  // console.log(data);

  return (
    <>
    {open ? (
      <div>
        <p>子コンポーネント</p>
        <button onClick={onClickClose}>閉じる</button>
      </div>
    ) : null}
    </>
  )
})

export default Childarea
