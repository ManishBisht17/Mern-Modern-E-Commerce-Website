
const OptionImgCard = ({photo}:{photo:string}) => {
  return (
    <div className="h-28 w-20 ">
        <img className="h-full w-full" src={photo} alt="" />
    </div>
  )
}

export default OptionImgCard