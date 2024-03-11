import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Jobrole.scss";
import dropdown from '../assets/images/acc-drop.svg'

const Jobrole = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-2">
        <div className="col-lg-12">
          <h1>Design</h1>
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
         
              <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             
             

             <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

             <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>

              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="row">
        <div className="col-lg-12">
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
              
            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
              
             

              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>

              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
      <div className="row mb-2 mt-5">
        <div className="col-lg-12">
          <h1>Software Development</h1>
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="2">
            <Accordion.Header>
    
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             
              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>

              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="row mb-2">
        <div className="col-lg-12">
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             

              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>
              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
      <div className="row mb-2">
        <div className="col-lg-12">
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             

              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>

              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
      <div className="row mb-2">
        <div className="col-lg-12">
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             

              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>
              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
      <div className="row">
        <div className="col-lg-12">
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className="accordion-content">

            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             

              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p className="mt-2">Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>

              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
      
      
      <div className="row mt-5 mb-5">
        <div className="col-lg-12">
        </div>
        <div className="col-lg-12">
          <h1>Customer Access</h1>
        </div>
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {" "}
              <div className="row w-100">
              <div className="col-10">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mb-2 ">Role</label>
                  <span className="role-description">Business Development Executive</span>
                </div>
              
                 
                <div class="col-lg-3 col-md-6 col-sm-6 col-6 ">
                  <label class="d-block role mb-2">Experience</label>
                  <span className="role-description">Fresher/Experienced</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Vacancies</label>
                  <span className="role-description">01</span>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                  <label class="d-block role mt-lg-0 mt-md-3 mt-sm-3 mt-3 mb-2">Location</label>
                  <span className="role-description">Delhi</span>
                </div>
              </div>
            
              </div>
              <div className="col-2 d-flex justify-content-end align-items-baseline">
<img src={dropdown} alt="dropdown" className="drop-down-icon pe-0" ></img>

              </div>

              </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className="col-lg-4 col-9">
              <h4>Business Development Executive</h4>
              </div>
             

              <p className="responsibility"><strong>Roles & Responsibilities</strong></p> 
              <ul class="opening_list_order">
                <li>
                Client Acquisition:.
                  <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>
                </li>
                <li>
                Sales Pipeline Management:
                  <p className="mt-2">Develop and manage a dynamic sales pipeline, ensuring lead progression to conversion.</p>

                </li>
                <li>
                Industry Engagement:
                                  <p className="mt-2">Stay informed about industry trends and opportunities for business expansion.</p>

                </li>
                <li>Client Relationship Building:
                <p className="mt-2">Build strong client relationships, understanding unique requirements and optimizing MessageCloud.AI services.</p>

                </li>
                <li>Product Presentations:
                <p>Deliver compelling sales presentations, demonstrating the value of MessageCloud.AI to clients.</p>

                </li>
                <li>Collaboration:
                <p className="mt-2">Engage potential clients, showcasing the benefits of MessageCloud.AI for their email delivery needs.</p>

                </li>

              </ul>

              <p className="responsibility"><strong>Requirements:</strong></p> 
              <ul class="opening_list_order">
                <li>
                  A Bachelors/Masters degree in Business or other relevant field.
                </li>
                <li>Proven experience as a Sales Executive in technology or SaaS.</li>
                <li> Understanding of email communication technology. </li>
                <li> Strong communication and negotiation skills.</li>
              </ul>
              <div class="text-end">
               <button className="apply-now">  Apply Now</button>
                
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
    </div>
  );
};

export default Jobrole;
