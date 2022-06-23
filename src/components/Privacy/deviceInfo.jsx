import React from "react";

const deviceInfo = () => {
  return (
    <div className="policy">
      <h1>Device Info - Pirvacy Policy</h1>
      <div className="privacy-header">
        Developer : Mrudul Tora
        <br />
        Email : toralabs24@gmail.com
      </div>
      <div className="privacy-content">
        <h2>Data Collection</h2>
        <p>
          Device Info does not collect user confidential data. The only data
          collected by the device info are the device Model and the device
          manufacturer. We use these data to detect the chipset, device name,
          CPU architecture, memory type, and bandwidth, etc. We do not collect
          personal information such as email addresses, your name, address, etc.
          Also, we have integrated the Google Firebase platform. So firebase
          will collect the data for it to work.
        </p>
      </div>
      <div className="privacy-content">
        <h2>Data collected by third-party SDK</h2>
        <p>
          The third-party SDK we use: <br />
          <strong>Google Firebase</strong> <br />
          <strong>Google AdMob</strong> <br />
          <strong>Google Play Services & Billing</strong> <br />
          These SDKs may collect your data, including Google advertising ID,
          advertising data (advertisement display, clicks, etc.), data used to
          combat fraud, cookies, device-related data (device model, region,
          language, etc.)
        </p>
      </div>
      <div className="privacy-content">
        <h2>Required Permissions</h2>
        <p>
          <strong>READ_PHONE_STATE</strong>- needed to get the information such
          as the carrier names and the device Ids <br />
          <strong>CAMERA</strong>- used to test the Flashlight <br />
          <strong>RECORD_AUDIO</strong>- used to test the Microphone <br />
          <strong>READ_EXTERNAL_STORAGE</strong>- Ear speaker & Loudspeaker are
          tested with the default ringtone. So to use the ringtone we need this
          permission <br />
          <strong>WRITE_EXTERNAL_STORAGE</strong>- Apps are extracted to the
          internal storage. So we need this permission to extract apps. (Not
          required on Android 10+) <br />
          <strong>BLUETOOTH_CONNECT</strong>- used to test the Bluetooth
          connectivity. (Android 12+)
        </p>
      </div>
    </div>
  );
};

export default deviceInfo;
