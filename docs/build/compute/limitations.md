# nilCC Limitations

These restrictions are in place to prevent access to sensitive system credentials and ensure secure container execution.

## File System & Storage

- **Custom filesystem drivers are not supported**
  - Only standard filesystem types are allowed
  - No custom or experimental filesystem drivers can be used

- **Volume mounts must start with `$FILES` or `${FILES}`**
  - All file access is restricted to your designated directory
  - Example: `$FILES/data:/app/data` ✓
  - Example: `/home/user/data:/app/data` ✗

- **No path traversal (`../`) to access parent directories**
  - Cannot use relative paths to escape the designated directory
  - All paths must remain within the allowed file space

- **Simple volume syntax only**
  - Format must be `source:destination`
  - No advanced volume options or configurations
  - No bind propagation options

- **Environment files follow the same path restrictions**
  - `.env` files must be in the allowed directory
  - Cannot reference environment files outside `$FILES`

## Container Security Restrictions

- **No privileged containers**
  - `privileged: true` is not allowed
  - Containers run with standard permissions only

- **No additional capabilities (`cap_add`)**
  - Cannot grant additional Linux capabilities to containers
  - Containers run with default capability set only

- **No device mounting**
  - Cannot mount host devices into containers
  - No access to `/dev` devices from the host

- **No shared namespaces with host**
  - `network_mode: host` is not allowed
  - `pid_mode: host` is not allowed
  - `ipc_mode: host` is not allowed
  - Containers remain isolated from host namespaces

- **No security option overrides (`security_opt`)**
  - Cannot disable security features
  - Cannot modify AppArmor or SELinux contexts
  - Standard security policies are enforced

## Docker Compose Features

- **No external file dependencies**
  - `extends` with external files is not supported
  - `include` directives for external compose files are not allowed
  - All configuration must be self-contained

- **No Docker secrets**
  - The `secrets` configuration is not supported
  - Use environment variables or mounted files instead
  - Example: Pass secrets via environment variables or `.env` files

- **No custom network drivers or advanced networking**
  - Cannot specify custom network drivers
  - No driver options configuration
  - No manual IP address management
  - Default bridge networking is used

- **No cgroup modifications**
  - Cannot set custom cgroup rules
  - No resource limit modifications beyond standard CPU/memory
  - System manages cgroups automatically

## Why These Limitations?

These restrictions ensure:

1. **Security Isolation**: Workloads cannot access host system resources or escape their designated environment
2. **Attestation Integrity**: The measurement and verification process remains reliable and tamper-proof
3. **Multi-tenancy Safety**: Multiple workloads can run safely on the same infrastructure without interference
4. **Credential Protection**: System credentials and secrets remain protected from workload access

## Working Within Limitations

Despite these restrictions, you can still:
- Run complex multi-container applications
- Use any programming language or framework
- Store and process data within your designated space
- Connect containers within your workload
- Access external services and APIs
- Use GPU resources (when allocated)

Most applications require minimal or no changes to work within these constraints. The limitations primarily affect edge cases that would compromise security rather than typical application functionality.