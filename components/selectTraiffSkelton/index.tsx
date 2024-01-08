import React from "react";
import CommonSkelton from "../commonSkelton";
import { motion } from "framer-motion";
import skeltonAnime from "../common/animation/skeltonAnim/index";
export default function SelectTraiffSkelton() {
  return (
    <motion.div
      key={`skeleton-div`}
      variants={skeltonAnime}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="max-width-small margin-auto"
    >
      <div className="margin-bottom margin-medium">
        <div className="margin-vertical margin-xsmall text-align-center">
          <CommonSkelton width={320} height={20} />
        </div>
        <div className="text-align-center" suppressHydrationWarning={true}>
          <CommonSkelton width={220} height={22} />
        </div>
      </div>

      {[1, 2].map((item, index) => {
        return (
          <>
            <div
              className="tickettypecontent"
              key={`skelton-shadow${index}`}
              suppressHydrationWarning={true}
            >
              <div className="tickettype">
                <div className="margin-bottom margin-tiny">
                  <CommonSkelton width={100} height={20} />
                </div>
                <div className="text-color-grey">
                  <CommonSkelton width={60} height={20} />
                </div>
              </div>
              <div className="ticketcountwrap">
                <CommonSkelton width={40} height={40} circle />
                <div className="selectedQuntityWrap">
                  <CommonSkelton width={40} height={40} circle />
                </div>
                <CommonSkelton width={40} height={40} circle />
              </div>
            </div>
          </>
        );
      })}
      {/* <div className="max-width-medium margin-auto is-custom">
        <div className="margin-bottom margin-custom_1-5">
          <div className="text-align-center">
            <div className="text-size-medium text-weight-regular text-color-white">Add CEA card</div>
          </div>
        </div>
        <div className="formitemwrap">
          <div className="formitemswrap">
            <div className="buttonnputwrap-custom ">
              <div className="w-embed">
                <input placeholder="Enter code" className="form_control input-field undefined" id="CEANumber" type="text" value="" name="CEANumber" />
              </div>
            </div>
            <button type="submit" className="button is-borderd is-block w-button  false">
              Validate
            </button>
          </div>
        </div>
        <div className="ceacontents"></div>
      </div> */}
    </motion.div>
  );
}
