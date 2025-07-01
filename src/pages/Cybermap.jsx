export default function CyberMap() {
    return (
        <div style={{ background: '#0e1b2a', padding: '1rem', borderRadius: '8px' }}>
            <iframe
                src="https://threatmap.fortiguard.com/"
                style={{
                    width: '100%',
                    height: '600px',
                    border: 'none',
                    backgroundColor: '#0e1b2a'
                }}
                sandbox="allow-same-origin allow-scripts allow-popups"
                title="FortiGuard Threat Map"
            />
        </div>
    );
}
