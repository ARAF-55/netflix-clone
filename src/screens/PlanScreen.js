import './PlanScreen.css';
import Plans from '../Plans';

function PlanScreen() {
    return (
        <div className='planScreen'>
            <Plans title={"Netflix Standard"} type={"1080p"} />
            <Plans title={"Netflix Basic"} type={"480p"} />
            <Plans title={"Netflix Premium"} type={"4k - HDR"} />
        </div>
    );
}

export default PlanScreen;