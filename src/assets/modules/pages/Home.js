import {HomePhrases} from '../Phrases';
import {getLanguage} from '../../Core.js';
import faLock from '../../img/lock-solid.svg';

function ModeSection() {
    return (
        <div className="modeSection">
            <div className='modeSection--title'>
                <p>{HomePhrases.phrase_mode[getLanguage()]}</p>
            </div>
            <div className='modeSection--toggle'>
                <p className='modeSection--toggle1'>{HomePhrases.phrase_mask[getLanguage()]}</p>
                <label className="modeSection--switch">
                    <input type="checkbox" />
                    <span className="modeSection--slider round"></span>
                </label> 
                <p className='modeSection--toggle1'>Dress Code</p>
            </div>
        </div>
    )
}

function SettingsSection() {
    return (
        <div className='settingsSection'>
            <div className='maskSettings'>
                <div className='maskSettings--inner'>
                    <h3>Mask Control - {HomePhrases.phrase_settings[getLanguage()]}</h3>
                    <div className='settings--Block'>
                        <div>
                            <label className="settings--checkbox">
                                <input type="checkbox" checked></input>
                                <span className="checkmark"></span>
                                <span className='settingsCheckbox--title'>{HomePhrases.phrase_turnon[getLanguage()]}</span>
                            </label>
                        </div>
                        <div>
                            <label className="settings--checkbox">
                                <input type="checkbox" checked></input>
                                <span className="checkmark"></span>
                                <span className='settingsCheckbox--title'>{HomePhrases.phrase_savephotos[getLanguage()]}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dressSettings'>
                <div className='dressSettings--inner'>
                    <h3>Dress Code - {HomePhrases.phrase_settings[getLanguage()]}</h3>
                </div>
                <center><img draggable="false" src={faLock} alt="lock" width='200px' className='dressSetting--lockIcon'></img></center>
            </div>
        </div>
    );
}

function MonitoringSection() {
    const stats = require('../../../stats.json');
    return (
        <div className='monitoringSection'>
            <div className='monitoringSection--item'>
                <h1 className='monitoringSection--count'>{stats['unmaskedToday']}</h1>
                <div className='monitoringSection--description'>{HomePhrases.phrase_unmaskedtoday[getLanguage()]}</div>
            </div>
            <div className='monitoringSection--item'>
                <h1 className='monitoringSection--count'>{stats['attemptsToday']}</h1>
                <div className='monitoringSection--description'>{HomePhrases.phrase_attemptstoday[getLanguage()]}</div>
            </div>
            <div className='monitoringSection--item'>
                <h1 className='monitoringSection--count'>{stats['unmaskedTotal']}</h1>
                <div className='monitoringSection--description'>{HomePhrases.phrase_unmaskedtotal[getLanguage()]}</div>
            </div>
            <div className='monitoringSection--item'>
                <h1 className='monitoringSection--count'>{stats['attemptsTotal']}</h1>
                <div className='monitoringSection--description'>{HomePhrases.phrase_attemptstotal[getLanguage()]}</div>
            </div>
        </div>
    );
}


export default function HomePage() {
    return (
        <div>
            <ModeSection />
            <SettingsSection />
            <MonitoringSection />
        </div>
    )
}