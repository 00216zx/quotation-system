#!/usr/bin/env python3
"""
Simple HTTP server for testing the quote HTML file
Usage: python simple_server.py
Then visit in browser: http://localhost:8000/报价单.html
"""

import http.server
import socketserver
import os
import sys

# Set port
PORT = 8000

# Set current directory as server root
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP request handler with CORS support"""
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_OPTIONS(self):
        """Handle OPTIONS request"""
        self.send_response(200)
        self.end_headers()

def main():
    """Start HTTP server"""
    try:
        # Create server
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"[OK] HTTP server started, port: {PORT}")
            print(f"[OK] Please visit in browser: http://localhost:{PORT}/报价单.html")
            print(f"[OK] Test page: http://localhost:{PORT}/test_image_save.html")
            print(f"[OK] Press Ctrl+C to stop server")
            print("-" * 60)
            
            # Start server
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n[OK] Server stopped")
        sys.exit(0)
    except OSError as e:
        if e.errno == 10048:  # Port already in use
            print(f"[ERROR] Port {PORT} is already in use, please try another port")
            sys.exit(1)
        else:
            print(f"[ERROR] Failed to start server: {e}")
            sys.exit(1)

if __name__ == "__main__":
    main()