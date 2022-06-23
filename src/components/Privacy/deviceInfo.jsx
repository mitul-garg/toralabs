import React from "react";

const deviceInfo = () => {
  return (
    <div className="policy">
      <h1>Privacy Policy</h1>
      <div className="privacy-header">
        <strong>Developer :</strong> Mrudul Tora (ToraLabs)
        <br />
        <strong> Email :</strong> support@toralabs.in
        <br />
        <strong>Address:</strong> Alkapuri Colony, Dewas, Madhya Pradesh, India
      </div>
      <div className="privacy-content">
        <h2>Data Collection</h2>
        <p>
          <b>Device Info</b> does not collect or store any user data on its own.
          The app is integrated with few third-party SDKs that collect
          some data like crash logs, advertising id, etc. to work in the
          required manner. We do not collect any personal data like email address,
          mobile number, name, address. The data collected by third-party
          SDKs is transferred and stored in an encrypted manner. The app
          requires few permissions to work in an effective way. The sole purpose
          of these permissions is to help you in testing your device.
        </p>
      </div>
      <div className="privacy-content">
        <h2>Data collected by Third-party SDKs</h2>
        <p>
          The third-party SDK we use are as follows: <br />
          • <strong><a href="https://firebase.google.com/support/privacy">Google Firebase</a></strong> <br />
          • <strong><a href="https://www.applovin.com/privacy/">Applovin MAX</a></strong> <br />
          • <strong>Google Play Services & Billing</strong> <br />
          • <strong>Facebook Audience Network (We do not use this anymore)</strong> <br />
          These SDKs may collect your data, including Google advertising ID,
          Advertising data (Advertisement display, clicks, etc.), Data used to
          combat fraud, Cookies, Device-related data (Device model, region,
          language, etc.). For more details, you can read there specific privacy
          policy pages. We cannot delete this data once collected, as it is stored in the respective third-party servers.
        </p>
      </div>
      <div className="privacy-content">
        <h2>Required Permissions</h2>
        <p>
          • <strong>USE_FINGERPRINT</strong>: Allows an app to use fingerprint hardware. It is used for Fingerprint Test.<br />
          • <strong>USE_BIOMETRIC</strong>: Allows an app to use fingerprint hardware. It is used for Fingerprint Test (for higher APIs).<br />
          • <strong>VIBRATE</strong>: Allows access to the vibrator. It is used for Vibration Test.<br />
          • <strong>INTERNET | ACCESS_WIFI_STATE | ACCESS_NETWORK_STATE</strong>: It is used to show information in Network Tab of the app.<br />
          • <strong>BILLING</strong>: It is required for Remove Ads feature (billing purposes).<br />
          • <strong>READ_PHONE_STATE</strong>: Allows read only access to phone state, including the current cellular network information,
          the status of any ongoing calls, and a list of any PhoneAccounts registered on the device. It is used in Device Tab of the app.<br />
          • <strong>CAMERA</strong>: It is used for the Flashlight Test. <br />
          • <strong>MODIFY_AUDIO_SETTINGS</strong>: It is used in Ear speaker and Loudspeaker Test.<br />
          • <strong>BLUETOOTH</strong>: Allows applications to connect to paired bluetooth devices. It is used in Bluetooth Test.<br />
          • <strong>BLUETOOTH_CONNECT</strong>: It is also used to connect to paired bluetooth devices in Android 12+.<br />
          • <strong>QUERY_ALL_PACKAGES</strong>: Allows query of any normal app on the device, regardless of manifest declarations.
          It is required for showing app related info.<br />
        </p>
        <p>We explicitly ask, some of these permissions. Some of them are automatically granted by the Android.
          If you have any doubts regarding this privacy policy, send me a message from the form given below.
        </p>
      </div>
    </div>
  );
};

export default deviceInfo;
