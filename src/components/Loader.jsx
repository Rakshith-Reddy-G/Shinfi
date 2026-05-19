import {TailSpin} from "react-loader-spinner"

function Loader() {
  return (
    <div className="flex items-center justify-center py-28">
      <TailSpin
        height="70"
        width="70"
        color="#7c3aed"
        ariaLabel="loading"
      />
    </div>
  )
}

export default Loader