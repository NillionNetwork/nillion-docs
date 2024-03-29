# SDK Instrumentation

Nillion SDK collects telemetry data to understand how the software is used and to better assist you in case of issues.
This telemetry is opt-in, by default we don't collect any data. If you want to help us improve our software, 
you can enable telemetry by running the following command:

```bash
nilup instrumentation enable --wallet <your-wallet-address>
```
The wallet address is optional.

While we will not collect any personal information, we still recommend using a new wallet address that cannot be linked to your identity by any third party.

By enabling telemetry you consent to the collection of telemetry data by the Nillion Network.
That includes but is not limited to
- The version of the SDK you are using
- The OS you are using
- The Processor Architecture you are using
- The SDK binary that you are running and the subcommand
- The wallet address you provided
- The errors produced by the SDK

For more information, our privacy policy is available at https://nillion.com/privacy/.


To disable telemetry run:

```bash
nilup instrumentation disable
```
