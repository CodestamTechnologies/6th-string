import React, { useState, useEffect, useCallback } from 'react';
import { X, Loader2, RefreshCcw } from 'lucide-react';

interface VideoDialogProps {
    videoUrl?: string;
    buttonText?: string;
    onOpen?: () => void;
    onClose?: () => void;
    thumbnailUrl?: string;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
    videoUrl = '',
    buttonText = 'Watch Video',
    onOpen,
    onClose,
    thumbnailUrl,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
        setIsClosing(false);
        document.body.style.overflow = 'hidden';
        onOpen?.();
    }, [onOpen]);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            document.body.style.overflow = 'unset';
            setIsLoading(true);
            setError(null);
            onClose?.();
        }, 200);
    }, [onClose]);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    const handleVideoError = () => {
        setError('Unable to load video. Please check your connection and try again.');
        setIsLoading(false);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <>
            <button
                onClick={handleOpen}
                className="group relative inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
                aria-label={buttonText}
            >
                <span>{buttonText}</span>
                <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`fixed inset-0 z-50 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
                        }`}
                    onClick={handleOverlayClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="video-dialog-title"
                >
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-md" />
                    <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                        <div className={`relative w-full max-w-6xl transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                            }`}>
                            <button
                                onClick={handleClose}
                                className="absolute -top-8 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label="Close video"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-black/50 shadow-2xl ring-1 ring-white/10">
                                {isLoading && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-4">
                                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                                        <p className="text-white/80 text-sm">Loading video...</p>
                                    </div>
                                )}

                                {error ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                                        <div className="text-center p-6">
                                            <div className="mb-4 text-red-400">
                                                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                            </div>
                                            <p className="text-white mb-4">{error}</p>
                                            <button
                                                onClick={() => {
                                                    setError(null);
                                                    setIsLoading(true);
                                                }}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-white"
                                            >
                                                <RefreshCcw className="w-4 h-4" />
                                                <span>Try Again</span>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {thumbnailUrl && isLoading && (
                                            <img
                                                src={thumbnailUrl}
                                                alt="Video thumbnail"
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}
                                        {videoUrl && (
                                            <iframe
                                                src={videoUrl}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                onLoad={handleVideoLoad}
                                                onError={handleVideoError}
                                                title="Video content"
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoDialog;
