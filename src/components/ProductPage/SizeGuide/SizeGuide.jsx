import './SizeGuide.css'

function SizeGuide() {
  return (
    <>
      
      <div 
        className="modal fade" 
        id="sizeChartModal" 
        tabIndex="-1" 
        aria-labelledby="sizeChartModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: '720px' }}>
          <div className="modal-content p-4 border-0 rounded-3">
            
            <div className="modal-header border-0 p-0 mb-4 align-items-start justify-content-between">
              <div>
                <h2 className="modal-title fs-4 fw-normal text-dark mb-1" id="sizeChartModalLabel">Size Chart</h2>
                <span className="text-secondary small fw-medium">Size Guide</span>
              </div>
              <button 
                type="button" 
                className="btn-close shadow-none" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-0">
              
              <div className="table-responsive mb-4">
                <table className="table align-middle text-secondary" style={{ fontSize: '14px' }}>
                  <thead>
                    <tr className="text-dark fw-semibold border-bottom">
                      <th scope="col" className="pb-3 ps-0" style={{ width: '15%' }}>Size</th>
                      <th scope="col" className="pb-3" style={{ width: '15%' }}>US</th>
                      <th scope="col" className="pb-3" style={{ width: '25%' }}>Bust</th>
                      <th scope="col" className="pb-3" style={{ width: '25%' }}>Waist</th>
                      <th scope="col" className="pb-3 pe-0" style={{ width: '20%' }}>Low Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-2 ps-0 fw-medium text-dark">XS</td>
                      <td className="py-2 text-muted">2</td>
                      <td className="py-2 text-muted">32</td>
                      <td className="py-2 text-muted">24 - 25</td>
                      <td className="py-2 pe-0 text-muted">33 - 34</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 ps-0 fw-medium text-dark">S</td>
                      <td className="py-3 text-muted">4</td>
                      <td className="py-3 text-muted">34 - 35</td>
                      <td className="py-3 text-muted">26 - 27</td>
                      <td className="py-3 pe-0 text-muted">35 - 36</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-2 ps-0 fw-medium text-dark">M</td>
                      <td className="py-2 text-muted">6</td>
                      <td className="py-2 text-muted">36 - 37</td>
                      <td className="py-2 text-muted">28 - 29</td>
                      <td className="py-2 pe-0 text-muted">38 - 40</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 ps-0 fw-medium text-dark">L</td>
                      <td className="py-3 text-muted">8</td>
                      <td className="py-3 text-muted">38 - 39</td>
                      <td className="py-3 text-muted">30 - 31</td>
                      <td className="py-3 pe-0 text-muted">42 - 44</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 ps-0 fw-medium text-dark">XL</td>
                      <td className="py-3 text-muted">10</td>
                      <td className="py-3 text-muted">40 - 41</td>
                      <td className="py-3 text-muted">32 - 33</td>
                      <td className="py-3 pe-0 text-muted">45 - 47</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 ps-0 fw-medium text-dark">XXL</td>
                      <td className="py-3 text-muted">12</td>
                      <td className="py-3 text-muted">42 - 43</td>
                      <td className="py-3 text-muted">34 - 35</td>
                      <td className="py-3 pe-0 text-muted">48 - 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-2">
                <h3 className="fs-6 fw-semibold text-dark mb-3">Measuring Tips</h3>
                
                <div className="row g-4 align-items-center">
                  <div className="col-md-7 text-secondary" style={{ fontSize: '13.6px', lineHeight: '1.6' }}>
                    <div className="mb-3">
                      <strong className="d-block text-dark mb-1">Bust</strong>
                      <p className="m-0 text-muted">Measure around the fullest part of your bust.</p>
                    </div>
                    
                    <div className="mb-3">
                      <strong className="d-block text-dark mb-1">Waist</strong>
                      <p className="m-0 text-muted">Measure around the narrowest part of your torso.</p>
                    </div>
                    
                    <div>
                      <strong className="d-block text-dark mb-1">Low Hip</strong>
                      <p className="m-0 text-muted">With your feet together measure around the fullest part of your hips/rear.</p>
                    </div>
                  </div>

                  <div className="col-md-5 text-center text-md-end mt-3 mt-md-0">
                    <div className="p-2">
                      <img 
                        src="\assets\Product Page\size-chart.jpg" 
                        alt="Measuring Guide" 
                        className="img-fluid d-block mx-auto" 
                        style={{ maxHeight: '160px', width: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeGuide;