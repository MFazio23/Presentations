

Notes:
- If you need to integrate at a lower level than what RN offers:
  - There's likely a library for whatever you need
  - But if not, you can create a native module
- Note that all native modules are initialized at app start, so be careful how many you have
- Do not have Coroutine support out of the box
