import React from "react";
import { v4 as uuidv4 } from "uuid";

const defaultState = [
  {
    id: uuidv4(),
    title: "Guided Access",
    os: "iphone",
    description: (
      <React.Fragment>
        alksdkadadlkasdlk asdkasdla sdkadkalsdk
        alkdalsdlaksdsadkflskdflskdflksdf flkflsdfsldk flsflsfklskfls
        ;fslfllsdf;lsldfsdfl;sd;fl
        <br />
        <br />
        <ol className="flex flex-col gap-5">
          <li>
            1. flfksldkflsk dflsdfdkfdfld lfdlkfldklkdk fkdlkkd kfkdkkfldkkd
          </li>
          <li>
            2. flfksldkflsk dflsdfdkfdfld lfdlkfldklkdk fkdlkkd kfkdkkfldkkd
          </li>
        </ol>
        s fkldkfdfkl dkfdkldlkdkdl lkklfd
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/3u_ulMvTYZI",
    advantages: (
      <React.Fragment>
        sfkdfmksmfksdfksm flskdmlfsmd lkfmslkdfmskdfms kdfsdmfksdfksl
        dfksmfsdfdfs flsmfksf dlfmskdmfk sdlfskfmsmdfkd smfksmdfks dmfsdfmsfmk
        smfkdmfms dfmsd flksm dfskdfm skfmskmfk smfmsdkm sffmsdfkms fskm dkfssd
        mfksdmfk smfksmdl fsdmfsmm fsmd
      </React.Fragment>
    ),
  },
  {
    id: uuidv4(),
    title: "Guided Access",
    os: "android",
    description: (
      <React.Fragment>
        alksdkadadlkasdlk asdkasdla sdkadkalsdk
        alkdalsdlaksdsadkflskdflskdflksdf flkflsdfsldk flsflsfklskfls
        ;fslfllsdf;lsldfsdfl;sd;fl
        <br />
        <br />
        <ol className="flex flex-col gap-5">
          <li>
            1. flfksldkflsk dflsdfdkfdfld lfdlkfldklkdk fkdlkkd kfkdkkfldkkd
          </li>
          <li>
            2. flfksldkflsk dflsdfdkfdfld lfdlkfldklkdk fkdlkkd kfkdkkfldkkd
          </li>
        </ol>
        s fkldkfdfkl dkfdkldlkdkdl lkklfd
      </React.Fragment>
    ),
    video_url: "https://www.youtube.com/embed/3u_ulMvTYZI",
    advantages: (
      <React.Fragment>
        sfkdfmksmfksdfksm flskdmlfsmd lkfmslkdfmskdfms kdfsdmfksdfksl
        dfksmfsdfdfs flsmfksf dlfmskdmfk sdlfskfmsmdfkd smfksmdfks dmfsdfmsfmk
        smfkdmfms dfmsd flksm dfskdfm skfmskmfk smfmsdkm sffmsdfkms fskm dkfssd
        mfksdmfk smfksmdl fsdmfsmm fsmd
      </React.Fragment>
    ),
  },
];

export default defaultState;
