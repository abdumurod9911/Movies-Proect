import './app-filter.css'


const AppFilter = () => {
    return (
        <div className="btn-group">
        <button className="btn btn-dark" type="button">
            Barcha filmlar
        </button>
        <button className="btn btn-outline-dark" type="button">
            Mashxur filmalr
        </button>
        <button className="btn btn-outline-dark" type="button">
            Eng ko'p ko'rilgan filmlar
        </button>

    </div>
    )
}

export default AppFilter