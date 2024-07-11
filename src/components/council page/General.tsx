import { useState } from 'react';

function General() {
  const [councilState, setCouncilState] = useState('general');
  return (
    <div className="my-8">
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left">
          General Secretaries
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">General Secretary 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              UDAY SUNKARABOINA
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9100831304</h4>
              <a
                href="mailto:general_secy_1@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                general_secy_1@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">General Secretary 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              KESAVA MAHITHA GADE
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">8309589768</h4>
              <a
                href="mailto:general_secy_2@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                general_secy_2@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left mt-8">
          Undergraduate Representatives
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">Undergraduate Representative 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              PARTH BRAHMBHATT
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9099781308</h4>
              <a
                href="mailto:ug_rep@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                ug_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">Undergraduate Representative 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              MADHURIMA CHUNDU
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">8297260216</h4>
              <a
                href="mailto:ug_rep@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                ug_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left mt-8">
          Postgraduate Representative
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">Postgraduate Representative 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              RAJESHWAR DHANKAR
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9205960833</h4>
              <a
                href="mailto:pg_rep@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                pg_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">Postgraduate Representative 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              ISHSIRJAN KAUR CHANDOK
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">7987106408</h4>
              <a
                href="mailto:pg_rep@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                pg_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-left mt-8">
          Doctoral Representative
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">Doctoral Representative 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">Swati Madaan</h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">7981076896</h4>
              <a
                href="mailto:phd_rep@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                phd_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          {/* <div className="bg-[#2F2F2F] text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl">
            <h4 className="italic text-p">Doctoral Representative 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold">
              Ankita Paul
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9647146397</h4>
              <a
                href="mailto:pg_rep@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                phd_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default General;
