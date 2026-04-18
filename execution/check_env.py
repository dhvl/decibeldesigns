import os
import sys

def check_env():
    print("--- 3-Layer Architecture Environment Check ---")
    
    # 1. Python Version
    print(f"Python Version: {sys.version}")
    
    # 2. Directory Checks
    dirs = ['directives', 'execution', '.tmp']
    for d in dirs:
        exists = os.path.isdir(d)
        print(f"Directory '{d}': {'Present' if exists else 'MISSING'}")
        if exists:
            # Test write access
            test_file = os.path.join(d, '.write_test')
            try:
                with open(test_file, 'w') as f:
                    f.write('test')
                os.remove(test_file)
                print(f"  - Write access: OK")
            except Exception as e:
                print(f"  - Write access: FAILED ({e})")

    # 3. Environment File
    if os.path.isfile('.env'):
        print("File '.env': Present")
    else:
        print("File '.env': MISSING")

    # 4. Dependency Checks (Soft check for common needs)
    try:
        import dotenv
        print("python-dotenv library: Available")
    except ImportError:
        print("python-dotenv library: Not found (Scripts may need to handle .env manually or install it)")

    print("--- Check Complete ---")

if __name__ == "__main__":
    check_env()
