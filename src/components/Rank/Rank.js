
const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3 ">
                {`${name}, Entry count is...`}
            </div>
            <div className="white f1 ">
                {entries['entries']}
            </div>
        </div>
    )
}

export default Rank;