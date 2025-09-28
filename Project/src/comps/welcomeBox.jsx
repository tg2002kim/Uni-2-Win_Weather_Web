import { BsAirplaneFill } from "react-icons/bs";
import { FaCloudSun } from "react-icons/fa";
import { handleSearchNameReq, handleFinalSearch } from './apiBed.jsx'

const WelcomeBox = ({ changeData }) => {
    const handleSearchInput = async (q) => {
        // Auto-completion feature logic (to be implemented)
        const result = await handleSearchNameReq(q.target.value, 5);
        // console.log(result);
    };

    const handleSearching = async (qd) => {
        qd.preventDefault();
        const queryCity = await handleSearchNameReq(qd.target.q.value);
        if (queryCity == null) {
            qd.target.q.classList.add('is-invalid');
        } else {
            qd.target.q.classList.remove('is-invalid');
            const result = await handleFinalSearch(queryCity[0]['lat'], queryCity[0]['lon']);
            changeData(result);
        }
    };

    const handleQuickSearch = async (cityName) => {
        const queryCity = await handleSearchNameReq(cityName);
        if (queryCity == null) {
            alert(`${cityName} 검색에 실패했습니다.`);
        } else {
            const result = await handleFinalSearch(queryCity[0]['lat'], queryCity[0]['lon']);
            changeData(result);
        }
    };

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="row text-center vw-100">
                    <br />
                    <div className="col-lg-12">
                        <h1 className='display-3'>
                            <FaCloudSun />
                            <span className="text-secondary-emphasis"> DKU </span>Weather App
                        </h1>
                        <br />
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <form onSubmit={data => handleSearching(data)}>
                            <div className="input-group border rounded-5">
                                <input className='form-control bg-light border-light rounded-5 rounded-end'
                                    type="search" name="q" id="queryBar"
                                    onChange={e => handleSearchInput(e)} />
                                <span className="input-group-text border-light rounded-5 rounded-start" id="basic-addon1">🔍</span>
                            </div>
                            <br />
                        </form>
                        <div className="d-flex justify-content-around mt-3">
                            <button 
                                className="btn rounded-5" 
                                style={{ backgroundColor: '#4a4a4a', color: '#ffffff', padding: '10px', borderRadius: '5px' }}
                                onClick={() => handleQuickSearch('서울')}
                            >
                                서울 <BsAirplaneFill />
                            </button>
                            <button 
                                className="btn rounded-5" 
                                style={{ backgroundColor: '#4a4a4a', color: '#ffffff', padding: '10px', borderRadius: '5px' }}
                                onClick={() => handleQuickSearch('오사카')}
                            >
                                오사카 <BsAirplaneFill />
                            </button>
                            <button 
                                className="btn rounded-5" 
                                style={{ backgroundColor: '#4a4a4a', color: '#ffffff', padding: '10px', borderRadius: '5px' }}
                                onClick={() => handleQuickSearch('파리')}
                            >
                                파리 <BsAirplaneFill />
                            </button>
                            <button 
                                className="btn rounded-5" 
                                style={{ backgroundColor: '#4a4a4a', color: '#ffffff', padding: '10px', borderRadius: '5px' }}
                                onClick={() => handleQuickSearch('로스앤젤레스')}
                            >
                                로스앤젤레스 <BsAirplaneFill />
                            </button>
                            <button 
                                className="btn rounded-5" 
                                style={{ backgroundColor: '#4a4a4a', color: '#ffffff', padding: '10px', borderRadius: '5px' }}
                                onClick={() => handleQuickSearch('두바이')}
                            >
                                두바이 <BsAirplaneFill />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    );
};

export default WelcomeBox;
