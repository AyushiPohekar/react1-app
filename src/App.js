import logo from './logo.svg';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import { faXmark} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='row'>
             <div className='col-lg-4'>
              <div className='card pricing'>
                  <div className='card-body pricingbody'>
                    <h5 className='card-title text-muted pricingtitle'>
                        FREE
                    </h5>
                    <h6 className='duration'><span className='price-value'>$0</span>/month</h6>
                     <hr/>
                     <ul className='fa-ul'>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span> Single User</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>5GB Storage</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                      <li className='text-muted'><span class="fa-li"><FontAwesomeIcon icon={faXmark} /></span>Unlimited Private Projects</li>
                      <li className='text-muted'><span class="fa-li"><FontAwesomeIcon icon={faXmark} /></span>Dedicated Phone Support</li>
                      <li className='text-muted'><span class="fa-li"><FontAwesomeIcon icon={faXmark} /></span>Free Subdomain</li>
                      <li className='text-muted'><span class="fa-li"><FontAwesomeIcon icon={faXmark} /></span>Monthly Status Reports</li>
                     </ul>
                     <button type="button" class="btn btn-primary  cardbutton" >Button</button>

                  </div>
              </div>
             </div>
             <div class='col-lg-4'>
             <div className='card pricing'>
                  <div className='card-body pricingbody'>
             <h5 className='card-title text-muted pricingtitle'>
                        PLUS
                    </h5>
                    <h6 className='duration'><span className='price-value'>$9</span>/month</h6>
                     <hr/>
                     <ul className='fa-ul'>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span><b>5 Users</b> </li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>50GB Storage</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                      <li ><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
                      <li ><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
                      <li ><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Free Subdomain</li>
                      <li className='text-muted'><span class="fa-li"><FontAwesomeIcon icon={faXmark} /></span>Monthly Status Reports</li>
                     </ul>
                     <button type="button" class="btn btn-primary  cardbutton" >Button</button>
             </div>
             </div>
             </div>
             

             <div class='col-lg-4'>

             <div className='card pricing'>
                  <div className='card-body pricingbody'>
             <h5 className='card-title text-muted pricingtitle'>
                        PRO
                    </h5>
                    <h6 className='duration'><span className='price-value'>$49</span>/month</h6>
                     <hr/>
                     <ul className='fa-ul'>
                      <li class><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span> <b>Unlimited User</b></li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>150GB Storage</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span><b>Unlimited</b> Private Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Free Subdomain</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Monthly Status Reports</li>
                     </ul>
                     <button type="button" class="btn btn-primary  cardbutton" >Button</button>
             </div>
             </div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default App;
