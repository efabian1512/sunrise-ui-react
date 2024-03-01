
import useRegFormContext from '../Hooks/useRegFormContex';


const ProgressBar = () => {

    const {state} = useRegFormContext();
    
    return <div>
        <span className="d-block fw-bold">Progreso</span>
        <div style={{height: '2rem'}} className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${state.percent}%`}} aria-valuemin={state.percent} aria-valuemax={100}>{state.percent}%</div>
                </div>
    </div>
}

export default ProgressBar;