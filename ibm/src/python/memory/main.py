def main(request):

    f=open("/proc/self/cgroup", "r")
    if f.mode == 'r':
        instance_id =f.read()
    f.close()

    f=open("/sys/class/dmi/id/product_uuid", "r")
    if f.mode == 'r':
        machine_id =f.read()
    f.close()
        
    f=open("/proc/cpuinfo", "r")
    if f.mode == 'r':
        cpuinfo =f.read()
    f.close()
        
    f=open("/proc/meminfo", "r")
    if f.mode == 'r':
        meminfo =f.read()
    f.close()
        
    f=open("/proc/uptime", "r")
    if f.mode == 'r':
        uptime =f.read()
    f.close()

    text = ""

    for i in range(1,int(request.get("n"))):
        text += 'A'

    return {
        'payload': 'memory Test',
        'success': True,
        'n': request.get("n"),
        'instance_id': instance_id,
        'machine_id': machine_id,
        'cpu': cpuinfo,
        'mem': meminfo,
        'uptime': uptime
    }