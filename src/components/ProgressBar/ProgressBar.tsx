
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';
import useRegFormContext from '../Hooks/useRegFormContex';


const ProgressBar = () => {

    // const {state} = useRegFormContext();

    const percent = useSelector((state: RootState) => state.familyRequestPet.famReqPercent);
    
    return <div>
        <span className="d-block fw-bold">Progreso</span>
        <div style={{height: '2rem'}} className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${percent}%`}} aria-valuemin={percent} aria-valuemax={100}>{percent}%</div>
                </div>
    </div>
}

export default ProgressBar;