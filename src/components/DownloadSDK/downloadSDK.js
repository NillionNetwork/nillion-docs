import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

const DownloadTable = ({
  downloadBaseUrl,
  version,
  sdkLink,
  pyClientLink,
  pyNadaLink,
}) => {
  const downloadLink = (link) => `${downloadBaseUrl}/${version}/${link}`;
  return (
    <table>
      <thead>
        <tr>
          <th>Binaries</th>
          <th>Description</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nillion SDK</td>
          <td>
            SDK Tools for key generation, compiling programs, simulating
            programs, and using nil-cli
          </td>
          <td>
            <a target="_blank" href={downloadLink(sdkLink)}>
              <button>Download</button>
            </a>
          </td>
        </tr>
        <tr>
          <td>Python Client</td>
          <td>
            Nillion Client Python module with APIs for building on the Nillion
            network
          </td>
          <td>
            <a target="_blank" href={downloadLink(pyClientLink)}>
              <button>Download</button>
            </a>
          </td>
        </tr>
        <tr>
          <td>PyNada DSL</td>
          <td>Nada DSL for Python, needed for writing programs</td>
          <td>
            <a target="_blank" href={downloadLink(pyNadaLink)}>
              <button>Download</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default function DownloadSDK() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const [userVersionCode, setUserVersionCode] = useState('-');

  const promptForVersion = () => {
    const downloadVersion = prompt(
      'Enter a valid Nillion binaries version code'
    );
    setUserVersionCode(downloadVersion);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {userVersionCode &&
      userVersionCode.startsWith('v2024-') &&
      userVersionCode.length == 21 ? (
        <div>
          <h3>Version: {userVersionCode}</h3>
          <p>Select your target platform to download Nillion binaries</p>
          <Tabs>
            <TabItem value="apple-m" label="Apple (M1/M2)" default>
              <h2>Apple (M1/M2)</h2>
              <DownloadTable
                downloadBaseUrl={customFields.downloadBaseUrl}
                version={userVersionCode}
                sdkLink={customFields.sdkAppleM}
                pyClientLink={customFields.pyClientAppleM}
                pyNadaLink={customFields.pyNadaAppleM}
              />
            </TabItem>
            <TabItem value="apple-intel" label="Apple (Intel chip)">
              <h2>Apple (Intel chip)</h2>
              <DownloadTable
                downloadBaseUrl={customFields.downloadBaseUrl}
                version={userVersionCode}
                sdkLink={customFields.sdkAppleIntel}
                pyClientLink={customFields.pyClientAppleIntel}
                pyNadaLink={customFields.pyNadaAppleIntel}
              />
            </TabItem>
            <TabItem value="linux-arm" label="Linux (ARM chip)">
              <h2>Linux (ARM chip)</h2>
              <DownloadTable
                downloadBaseUrl={customFields.downloadBaseUrl}
                version={userVersionCode}
                sdkLink={customFields.sdkLinuxArm}
                pyClientLink={customFields.pyClientLinuxArm}
                pyNadaLink={customFields.pyNadaLinuxArm}
              />
            </TabItem>
            <TabItem value="linux-intel" label="Linux (Intel/AMD chip)">
              <h2>Linux (Intel/AMD chip)</h2>
              <DownloadTable
                downloadBaseUrl={customFields.downloadBaseUrl}
                version={userVersionCode}
                sdkLink={customFields.sdkLinuxIntel}
                pyClientLink={customFields.pyClientLinuxIntel}
                pyNadaLink={customFields.pyNadaLinuxIntel}
              />
            </TabItem>
          </Tabs>
        </div>
      ) : (
        <div>
          <p>
            For now, Nillion binaries including the SDK tools, Python Client,
            and Nada DSL are only available to builders who are part of the{' '}
            <Link to="/nucleus-builders-program">Nucleus Builders Program</Link>
            .
          </p>
          <button
            onClick={promptForVersion}
            className="breadcrumbs__link"
            style={{ cursor: 'pointer', borderRadius: 10 }}
          >
            Enter version code to download binaries
          </button>
        </div>
      )}
    </div>
  );
}
