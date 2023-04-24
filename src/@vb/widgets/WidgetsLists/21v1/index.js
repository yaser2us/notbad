import React from 'react'

const List21v1 = () => {
  return (
    <div className="rounded p-5 text-center flex-grow-1 bg-light">
      <i className="fe fe-cpu font-size-80 mb-3 d-block" />
      <div className="text-dark font-weight-bold font-size-36">Standart</div>
      <div className="text-dark font-weight-bold font-size-48 mb-3">
        $49 <span className="align-text-top font-size-28 text-gray-6">/mo</span>
      </div>
      <ul className="list-unstyled font-size-18 mb-5">
        <li>20GB of Bandwidth</li>
        <li>400MB Max File Size</li>
        <li>2GHZ CPU</li>
        <li>512MB Memory</li>
        <li>2 GB Storage</li>
      </ul>
      <a className="btn btn-primary width-100" href="">
        Get Access
      </a>
    </div>
  )
}

export default List21v1
