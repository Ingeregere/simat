import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WhatsappChat() { 
 
	return (
		<FloatingWhatsApp
			phoneNumber={'+25772415986'} 
			accountName={'SIMAT-BURUNDI'}
			avatar={'images/drapeau.png'}
			statusMessage={' En ligne'}
			chatMessage={'Bonjour ! Est-ce-que je peux vous aider?'}
			notification={true}
			notificationSound={true}
		/>
	)
}