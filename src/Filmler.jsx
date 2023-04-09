function Filmler({filmler}) {

    return (
        <div className="col-md-6">
            <h2>Karakterin yer aldığı filmler:</h2>
            <ul>
                {filmler?.map((filmUrl) => (
                    <li key={filmUrl}>
                        <a href={filmUrl}>{filmUrl}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filmler